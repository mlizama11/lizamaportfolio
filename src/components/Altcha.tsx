'use client';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';

import { AltchaProps, AltchaWidget } from '@/types';

function AltchaComponent(
  { onStateChange, id }: AltchaProps,
  ref: React.Ref<{ value: string | null }>
) {
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
    import('altcha').catch((err) => {
      console.error('Failed to load altcha web component:', err);
    });

    const handleStateChange = (ev: Event | CustomEvent) => {
      if (
        'detail' in ev &&
        ev.detail &&
        typeof ev.detail === 'object' &&
        'detail' in ev.detail
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

const Altcha = forwardRef(AltchaComponent);

Altcha.displayName = 'Altcha';

export default Altcha;
