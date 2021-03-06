/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-multi-comp */

import cc from 'classcat'
import React from 'react'

type BaseButtonProps = React.ComponentPropsWithoutRef<'button'>

const BaseButton: React.FC<BaseButtonProps> = ({
  className,
  disabled,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- type is hardcoded
  type,
  ...restProperties
}) => {
  return (
    <button
      className={cc([
        className,
        'border border-grey-900 rounded active:shadow-none focus:outline-none',
        'text-xs font-bold leading-none',
        { 'shadow-md': !disabled },
      ])}
      disabled={disabled}
      type="button"
      {...restProperties}
    />
  )
}

interface LightButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  tone?: 'primary' | 'sponsor'
}

export const LightButton: React.FC<LightButtonProps> = ({
  className,
  disabled,
  tone,
  ...restProperties
}) => {
  return (
    <BaseButton
      className={cc([
        className,
        'py-2 px-3',
        'space-x-2',
        {
          'text-blue-400 active:text-blue-300': !disabled && tone === 'primary',
        },
        {
          'text-pink-400 active:text-pink-300': !disabled && tone === 'sponsor',
        },
        {
          'text-grey-300 active:text-grey-200': !disabled && !tone,
        },
        { 'bg-grey-600': !disabled },
        { 'bg-grey-700 text-grey-500': disabled },
      ])}
      disabled={disabled}
      {...restProperties}
    />
  )
}

type DarkButtonProps = React.ComponentPropsWithoutRef<'button'>

export const DarkButton: React.FC<DarkButtonProps> = ({
  className,
  disabled,
  ...restProperties
}) => {
  return (
    <BaseButton
      className={cc([
        className,
        'py-2 px-3',
        'space-x-2',
        { 'bg-grey-700 text-grey-300 active:text-grey-200': !disabled },
        { 'bg-transparent text-grey-500': disabled },
      ])}
      disabled={disabled}
      {...restProperties}
    />
  )
}

type LargeDarkButtonProps = React.ComponentPropsWithoutRef<'button'>

export const LargeDarkButton: React.FC<LargeDarkButtonProps> = ({
  className,
  disabled,
  ...restProperties
}) => {
  return (
    <BaseButton
      className={cc([
        className,
        'h-24 text-left p-3',
        { 'bg-grey-700 text-grey-300 active:text-grey-200': !disabled },
        { 'bg-transparent text-grey-500': disabled },
      ])}
      disabled={disabled}
      {...restProperties}
    />
  )
}
