/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null)
      - `email` (text, not null)
      - `message` (text, not null)
      - `created_at` (timestamptz)
      - `ip_address` (text)

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to read all submissions
    - Add policy for public to insert submissions with rate limiting
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  ip_address text
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read all submissions
CREATE POLICY "Allow authenticated users to read all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy for public to insert submissions with rate limiting
CREATE POLICY "Allow public to insert submissions with rate limit"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (
    -- Check if less than 5 submissions in the last 24 hours from the same IP
    (
      SELECT COUNT(*)
      FROM contact_submissions
      WHERE ip_address = current_setting('request.headers')::json->>'cf-connecting-ip'
        AND created_at > now() - interval '24 hours'
    ) < 5
  );