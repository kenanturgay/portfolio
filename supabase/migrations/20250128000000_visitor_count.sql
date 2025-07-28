-- Visitor count tablosu oluştur
CREATE TABLE IF NOT EXISTS visitor_count (
  id INTEGER PRIMARY KEY DEFAULT 1,
  count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- İlk kaydı ekle
INSERT INTO visitor_count (id, count) 
VALUES (1, 0) 
ON CONFLICT (id) DO NOTHING;

-- RLS (Row Level Security) politikalarını ayarla
ALTER TABLE visitor_count ENABLE ROW LEVEL SECURITY;

-- Herkesin okuyabilmesi için policy
CREATE POLICY "Allow read access for everyone" ON visitor_count
  FOR SELECT USING (true);

-- Herkesin güncelleyebilmesi için policy (sadece count artırma)
CREATE POLICY "Allow update access for everyone" ON visitor_count
  FOR UPDATE USING (true);

-- Trigger function for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for visitor_count table
CREATE TRIGGER update_visitor_count_updated_at
    BEFORE UPDATE ON visitor_count
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
