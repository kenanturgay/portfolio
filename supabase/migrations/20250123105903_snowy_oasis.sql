/*
  # Portfolio Content Management Schema

  1. New Tables
    - `content_sections`
      - `id` (uuid, primary key)
      - `section` (text) - Section identifier (about, experience, etc.)
      - `content` (jsonb) - Section content in JSON format
      - `updated_at` (timestamp)
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `tech_stack` (text[])
      - `live_url` (text)
      - `github_url` (text)
      - `order` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users (admins) to manage content
*/

-- Content Sections Table
CREATE TABLE IF NOT EXISTS content_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section text NOT NULL UNIQUE,
  content jsonb NOT NULL DEFAULT '{}',
  updated_at timestamptz DEFAULT now()
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  tech_stack text[] NOT NULL DEFAULT '{}',
  live_url text,
  github_url text,
  "order" integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE content_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policies for content_sections
CREATE POLICY "Allow public read content_sections"
  ON content_sections
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage content_sections"
  ON content_sections
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for projects
CREATE POLICY "Allow public read projects"
  ON projects
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial content sections
INSERT INTO content_sections (section, content) VALUES
  ('hero', '{"greeting":"Merhaba, Ben","name":"Kenan Turgay","description":"Frontend Geliştirici olarak modern web teknolojileri ile çalışıyor, kullanıcı dostu ve performanslı uygulamalar geliştiriyorum."}'),
  ('about', '{"title":"Hakkımda","description":["5+ yıllık deneyimimle modern web teknolojilerini kullanarak kullanıcı dostu ve performanslı uygulamalar geliştiriyorum. React, TypeScript ve modern frontend araçlarında uzmanım.","Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyor, yeni teknolojileri yakından takip ediyorum. Temiz kod yazma ve en iyi pratikleri uygulama konusunda titizim."]}'),
  ('contact', '{"email":"kenan.turgay@example.com","phone":"+90 123 456 7890","location":"İstanbul, Türkiye"}')
ON CONFLICT (section) DO NOTHING;