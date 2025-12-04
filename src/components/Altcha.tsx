'use client';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

type AltchaWidgetMethods = {
  validate?: () => void;
};
type AltchaWidget = HTMLElement &
  AltchaWidgetMethods & {
    challengeurl: string;
    name: string;
  };

type AltchaProps = {
  onStateChange?: (ev: Event | CustomEvent) => void;
  id?: string;
};

const Altcha = forwardRef<{ value: string | null }, AltchaProps>(
  ({ onStateChange, id }, ref) => {
    const widgetRef = useRef<AltchaWidget>(null);
    const [value, setValue] = useState<string | null>(null);

    useImperativeHandle(ref, () => {
      return {
        get value() {
          return value;
        }
      };
    }, [value]);

    useEffect(() => {
      // Use a standard dynamic import *inside* useEffect
      // to ensure the module is loaded ONLY on the client and is not rendered.
      // This handles the 'customElements is not defined' error safely.
      import('altcha').catch((err) => {
        console.error('Failed to load altcha web component:', err);
      });

      const handleStateChange = (ev: Event | CustomEvent) => {
        if (
          'detail' in ev &&
          ev.detail &&
          typeof ev.detail === 'object' &&
          'payload' in ev.detail
        ) {
          setValue(ev.detail.payload || null);
          onStateChange?.(ev);
        }
      };

      const { current } = widgetRef;

      if (current) {
        current.addEventListener('statechange', handleStateChange);
        return () =>
          current.removeEventListener('statechange', handleStateChange);
      }
    }, [onStateChange]);

    return (
      // We only render the custom element tag now, relying on useEffect
      // to ensure the definition is loaded before or when the element is rendered.
      <altcha-widget
        id={id}
        ref={widgetRef}
        style={{
          '--altcha-max-width': '100%'
        }}
        name="altcha"
        challengeurl="/api/challenge"
      />
    );
  }
);

Altcha.displayName = 'Altcha';

export default Altcha;
