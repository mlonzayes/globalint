'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { TextareaHTMLAttributes } from 'react';

const textAreaClasses = cva(
    'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-vertical',
    {
        variants: {
            variant: {
                default: 'border border-border-secondary bg-background-primary',
                outline: 'border-2 border-primary-blue bg-transparent',
                filled: 'border-0 bg-background-secondary',
            },
            size: {
                small: 'text-xs px-2 py-1 min-h-[60px]',
                medium: 'text-sm px-3 py-2 min-h-[80px]',
                large: 'text-base px-4 py-3 min-h-[120px]',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
        },
    }
)

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaClasses> {
    // Required parameters with defaults
    fill_background_color?: string;
    border_border?: string;
    border_border_radius?: string;

    // Optional parameters
    layout_width?: string;
    padding?: string;
    position?: string;
}

const TextArea = ({
    // Required parameters with defaults
    fill_background_color = "bg-background-primary",
    border_border = "1px solid #e5e7eb",
    border_border_radius = "rounded-sm",

    // Optional parameters (no defaults)
    layout_width,
    padding,
    position,

    // Standard React props
    variant,
    size,
    disabled = false,
    className,
    placeholder = "Enter text...",
    rows = 4,
    ...props
}: TextAreaProps) => {
    // Safe validation for optional parameters
    const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
    const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
    const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

    const optionalClasses = [
        hasValidWidth ? `w-[${layout_width}]` : '',
        hasValidPadding ? `p-[${padding}]` : '',
        hasValidPosition ? position : '',
    ].filter(Boolean).join(' ')

    // Parse border string to extract color
    const parseBorder = (borderStr: string) => {
        const parts = borderStr.split(' ')
        if (parts.length >= 3) {
            const width = parts[0]
            const style = parts[1]
            const color = parts[2]
            return {
                width: `border-[${width}]`,
                style: style === 'solid' ? 'border-solid' : 'border-dashed',
                color: color.startsWith('#') ? `border-[${color}]` : `border-${color}`
            }
        }
        return { width: 'border', style: 'border-solid', color: 'border-border-secondary' }
    }

    const borderClasses = parseBorder(border_border)

    // Build Tailwind classes for styling
    const styleClasses = [
        fill_background_color,
        borderClasses.width,
        borderClasses.style,
        borderClasses.color,
        border_border_radius,
    ].filter(Boolean).join(' ')

    return (
        <textarea
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            className={twMerge(
                textAreaClasses({ variant, size }),
                styleClasses,
                optionalClasses,
                className
            )}
            {...props}
        />
    )
}

export default TextArea