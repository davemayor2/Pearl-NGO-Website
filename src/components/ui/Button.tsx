"use client";
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'light' | 'outlineWhite';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

function getVariantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case 'primary':
      return 'bg-cta text-white hover:bg-cta/90 shadow-sm';
    case 'secondary':
      return 'bg-primary text-white hover:bg-primary/90 shadow-sm';
    case 'outline':
      return 'border border-dark text-dark hover:bg-dark hover:text-white';
    case 'outlineWhite':
      return 'border border-white text-white hover:bg-white/10';
    case 'light':
      return 'bg-white text-dark hover:bg-white/90 shadow';
    default:
      return '';
  }
}

function getSizeClasses(size: ButtonSize): string {
  switch (size) {
    case 'sm':
      return 'px-4 py-2 text-sm rounded-full';
    case 'md':
      return 'px-6 py-3 text-base rounded-full';
    case 'lg':
      return 'px-8 py-4 text-lg rounded-full';
    default:
      return '';
  }
}

export default function Button({ href, variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const base = `inline-flex items-center justify-center font-semibold transition-colors ${getVariantClasses(variant)} ${getSizeClasses(size)} ${className}`;
  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }
  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}


