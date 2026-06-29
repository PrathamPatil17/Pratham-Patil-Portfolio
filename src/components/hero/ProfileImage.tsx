import React from 'react';
import Image from 'next/image';
import personalInfo from '@/data/personal-info.json';

interface ProfileImageProps {
  size: 'small' | 'large';
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ size, className = '' }) => {
  const sizeClasses = {
    small: 'w-40 h-40 sm:w-52 sm:h-52',
    large: 'w-72 h-72 xl:w-80 xl:h-80'
  };

  return (
    <div className={`relative ${className}`}>
      {/* Single violet glow */}
      <div className="absolute -inset-6 rounded-full opacity-20 blur-3xl" style={{ background: 'hsl(160,76%,44%)' }} aria-hidden="true" />
      <div
        className={`${sizeClasses[size]} relative rounded-full p-[2.5px]`}
        style={{ background: 'linear-gradient(135deg, hsl(160,76%,44%) 0%, hsl(178,68%,46%) 100%)', boxShadow: '0 0 40px hsla(160,76%,44%,0.3)' }}
      >
        <div className="h-full w-full overflow-hidden rounded-full bg-card">
          <Image
            src={personalInfo.personal.profileImage}
            alt="Pratham Patil - Generative AI Engineer"
            width={320}
            height={320}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
