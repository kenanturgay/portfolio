import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Contact = () => {
  const { t } = useLanguage();
  const [submitStatus, setSubmitStatus] = useState({ error: '', success: false });

  const schema = z.object({
    name: z.string()
      .min(3, { message: t('contact.validation.nameMin') })
      .max(50, { message: t('contact.validation.nameMax') })
      .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/, { message: t('contact.validation.nameFormat') })
      .transform(val => val.trim()),
    email: z.string()
      .email({ message: t('contact.validation.emailInvalid') })
      .max(100, { message: t('contact.validation.emailMax') })
      .transform(val => val.trim().toLowerCase()),
    message: z.string()
      .min(10, { message: t('contact.validation.messageMin') })
      .max(500, { message: t('contact.validation.messageMax') })
      .transform(val => val.trim())
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus({ error: '', success: true });
        reset();
        setTimeout(() => setSubmitStatus({ error: '', success: false }), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        error: t('contact.error'),
        success: false
      });
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center dark:text-white">{t('contact.title')}</h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="card p-8">
            {submitStatus.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">{submitStatus.error}</p>
              </div>
            )}
            
            {submitStatus.success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-600">{t('contact.success')}</p>
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                autoComplete="name"
                {...register('name')}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                {...register('email')}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows="4"
                {...register('message')}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2`}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  {t('contact.form.submit')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;