import { supabase } from './supabase';

export async function sendContactEmail(data) {
  try {
    // Sanitize input data
    const sanitizedData = {
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      message: data.message.trim()
    };

    // Save to Supabase
    const { error } = await supabase
      .from('contact_submissions')
      .insert([sanitizedData]);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error('Submission error:', error);
    return { 
      success: false, 
      error: error.message || 'An unexpected error occurred'
    };
  }
}