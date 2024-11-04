import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { PuffLoader } from 'react-spinners';

interface ContactFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
}

interface FormMessage {
  type: 'success' | 'error' | '';
  text: string;
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<FormMessage>({ type: '', text: '' });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      setIsLoading(true);
      setFormMessage({ type: '', text: '' });

      await emailjs.send('service_ppiz6aj', 'template_0igmfqr', data, {
        publicKey: '7Dmvhm5O04NbJA2Mw',
      });

      setFormMessage({
        type: 'success',
        text: 'Thank you for your message! We will get back to you soon.',
      });
      
      reset(); // Reset form after successful submission
      
    } catch (error) {
      setFormMessage({
        type: 'error',
        text: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-md mx-auto p-6 shadow-lg rounded-lg space-y-6'
      >
        <h4 className='text-white text-xl font-semibold mb-4'>Let's Get Connected</h4>

        <div className='relative'>
          <FontAwesomeIcon
            icon={faUser}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white'
          />
          <input
            {...register('fullName', { required: 'Full Name is required' })}
            placeholder='Full Name'
            className='w-full p-3 pl-10 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-fuchsia-700'
            aria-invalid={errors.fullName ? 'true' : 'false'}
            disabled={isLoading}
          />
        </div>
        {errors.fullName && <span className='text-red-500 text-sm'>{errors.fullName.message}</span>}

        <div className='relative'>
          <FontAwesomeIcon
            icon={faPhone}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white'
          />
          <input
            type='tel'
            {...register('phoneNumber', {
              required: 'Phone Number is required',
              pattern: {
                value: /^\d+$/,
                message: 'Only numbers are allowed in the Phone Number field',
              },
            })}
            placeholder='Phone Number'
            className='w-full p-3 pl-10 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-fuchsia-700'
            aria-invalid={errors.phoneNumber ? 'true' : 'false'}
            disabled={isLoading}
          />
        </div>
        {errors.phoneNumber && (
          <span className='text-red-500 text-sm'>{errors.phoneNumber.message}</span>
        )}

        <div className='relative'>
          <FontAwesomeIcon
            icon={faEnvelope}
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white'
          />
          <input
            type='email'
            {...register('emailAddress', { required: 'Email Address is required' })}
            placeholder='Email'
            className='w-full p-3 pl-10 bg-transparent text-white border-b-2 border-white focus:outline-none focus:border-fuchsia-700'
            aria-invalid={errors.emailAddress ? 'true' : 'false'}
            disabled={isLoading}
          />
        </div>
        {errors.emailAddress && (
          <span className='text-red-500 text-sm'>{errors.emailAddress.message}</span>
        )}

        <button
          type='submit'
          disabled={isLoading}
          className={`text-white py-2 px-6 transition duration-300 ease-in-out 
            ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'} 
            border-2 block`}
        >
          {isLoading ? <PuffLoader color='#a21caf' size={24}/> : 'Send'}
        </button>
      </form>
      
      {formMessage.text && (
        <p 
          className={`mt-4 text-center ${
            formMessage.type === 'success' 
              ? 'text-green-500' 
              : 'text-red-500'
          }`}
        >
          {formMessage.text}
        </p>
      )}
    </>
  );
};