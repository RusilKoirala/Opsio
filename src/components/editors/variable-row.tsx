'use client';

import { Button } from '@/components/ui/button';
import { EnvVariable } from '@/schema';
import { RemoveCircleIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import {
  SmartVariableInput,
  SmartVariableInputRef,
} from './smart-variable-input';

export interface VariableRowRef {
  focusKey: () => void;
  focusValue: () => void;
}

interface VariableRowProps {
  variable: EnvVariable;
  index: number;
  isValueVisible: boolean;
  onUpdate: (field: keyof EnvVariable, value: string) => void;
  onToggleVisibility: () => void;
  onDelete: () => void;
  onSmartPaste: (variables: EnvVariable[]) => void;
  onNavigateToNext?: () => void;
}

export const VariableRow = memo(
  forwardRef<VariableRowRef, VariableRowProps>(function VariableRow(
    {
      variable,
      index,
      isValueVisible,
      onUpdate,
      onToggleVisibility,
      onDelete,
      onSmartPaste,
      onNavigateToNext,
    },
    ref
  ) {
    const keyInputRef = useRef<SmartVariableInputRef>(null);
    const valueInputRef = useRef<SmartVariableInputRef>(null);

    useImperativeHandle(ref, () => ({
      focusKey: () => keyInputRef.current?.focus(),
      focusValue: () => valueInputRef.current?.focus(),
    }));

    return (
      <div className="group flex flex-col sm:flex-row gap-4 sm:items-end p-5 bg-muted/30 rounded-2xl border border-border hover:border-border/80 transition-all">
        <div className="flex-1 flex flex-col gap-1.5">
          <label htmlFor={`key-${index}`} className="text-xs font-semibold text-foreground/80">
            Key
          </label>
          <SmartVariableInput
            ref={keyInputRef}
            variable={variable}
            index={index}
            field="key"
            placeholder="VARIABLE_NAME"
            onUpdate={onUpdate}
            onSmartPaste={onSmartPaste}
            onNavigateNext={() => valueInputRef.current?.focus()}
            autoFocus={index === 0 && !variable.key}
          />
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <label htmlFor={`value-${index}`} className="text-xs font-semibold text-foreground/80">
            Value
          </label>
          <SmartVariableInput
            ref={valueInputRef}
            variable={variable}
            index={index}
            field="value"
            type="text"
            placeholder="Your secret value here"
            onUpdate={onUpdate}
            onSmartPaste={onSmartPaste}
            onNavigateNext={onNavigateToNext}
            isVisibleRequired={true}
            isValueVisible={isValueVisible}
            onToggleVisibility={onToggleVisibility}
          />
        </div>
        <div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 size-9"
            aria-label="Delete variable"
          >
            <HugeiconsIcon icon={RemoveCircleIcon} size={18} />
          </Button>
        </div>
      </div>
    );
  })
);
