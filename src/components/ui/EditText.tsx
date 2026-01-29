'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { InputHTMLAttributes, CSSProperties } from 'react';

const editTextClasses = cva(
    'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed',
    {
        variants: {
            variant: {
                default: 'border border-border-secondary bg-background-primary',
                outline: 'border-2 border-primary-blue bg-transparent',
                filled: 'border-0 bg-background-secondary',
            },
            size: {
                small: 'text-xs px-2 py-1',
                medium: 'text-sm px-3 py-2',
                large: 'text-base px-4 py-3',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'medium',
        },
    }
)

interface EditTextProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof editTextClasses> {
    // Required parameters with defaults
    placeholder?: string;
    text_font_size?: string;
    text_font_family?: string;
    text_font_weight?: string;
    text_line_height?: string;
    text_text_align?: string;
    text_color?: string;

    // Optional parameters
    layout_gap?: string;
    layout_width?: string;
    padding?: string;
    margin?: string;
    position?: string;

    // Icon props
    rightIcon?: {
        src: string;
        width: number;
        height: number;
    };
}

const EditText = ({
    // Required parameters with defaults
    placeholder = "Email",
    text_font_size = "text-sm",
    text_font_family = "Inter",
    text_font_weight = "font-normal",
    text_line_height = "leading-sm",
    text_text_align = "left",
    text_color = "text-text-muted",

    // Optional parameters (no defaults)
    layout_gap,
    layout_width,
    padding,
    margin,
    position,
    rightIcon,

    // Standard React props
    variant,
    size,
    disabled = false,
    className,
    type = 'text',
    ...props
}: EditTextProps) => {
    // Safe validation for optional parameters
    const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== ''
    const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
    const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
    const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
    const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

    const optionalClasses = [
        hasValidGap ? `gap-[${layout_gap}]` : '',
        hasValidWidth ? `w-[${layout_width}]` : '',
        hasValidPadding ? `p-[${padding}]` : '',
        hasValidMargin ? `m-[${margin}]` : '',
        hasValidPosition ? position : '',
    ].filter(Boolean).join(' ')

    // Build custom styles for non-Tailwind properties
    const customStyles: CSSProperties = {
        // Only use inline styles for truly custom values
        ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
    }

    // Build Tailwind classes for styling
    const styleClasses = [
        text_font_size,
        text_font_family.startsWith('font-') ? text_font_family : '',
        text_font_weight,
        text_line_height,
        `text-${text_text_align}`,
        text_color,
    ].filter(Boolean).join(' ')

    if (rightIcon) {
        return (
            <div className={twMerge('relative', optionalClasses)}>
                <input
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    style={customStyles}
                    className={twMerge(
                        editTextClasses({ variant, size }),
                        styleClasses,
                        'pr-10',
                        className
                    )}
                    {...props}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <img
                        src={rightIcon.src}
                        alt=""
                        width={rightIcon.width}
                        height={rightIcon.height}
                        className="flex-shrink-0"
                    />
                </div>
            </div>
        )
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            style={customStyles}
            className={twMerge(
                editTextClasses({ variant, size }),
                styleClasses,
                optionalClasses,
                className
            )}
            {...props}
        />
    )
}

export default EditText