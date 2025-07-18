// components/ui/switch.tsx
"use client"

import * as React from "react"
import { Switch as HeadlessSwitch } from "@headlessui/react"
import { clsx } from "clsx"

export interface SwitchProps {
    checked?: boolean
    defaultChecked?: boolean
    disabled?: boolean
    onChange?: (checked: boolean) => void
}

export const Switch = ({
                           checked,
                           defaultChecked,
                           disabled = false,
                           onChange,
                       }: SwitchProps) => {
    const [enabled, setEnabled] = React.useState(defaultChecked ?? false)

    const handleChange = (val: boolean) => {
        setEnabled(val)
        onChange?.(val)
    }

    return (
        <HeadlessSwitch
            checked={checked ?? enabled}
            onChange={handleChange}
            disabled={disabled}
            className={clsx(
                "relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
                checked ?? enabled
                    ? "bg-blue-600"
                    : "bg-gray-700",
                disabled && "opacity-50 cursor-not-allowed"
            )}
        >
            <span className="sr-only">Toggle</span>
            <span
                className={clsx(
                    "pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                    checked ?? enabled ? "translate-x-5" : "translate-x-0"
                )}
            />
        </HeadlessSwitch>
    )
}

export default Switch
