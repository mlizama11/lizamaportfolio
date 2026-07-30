import assert from 'node:assert/strict';
import test from 'node:test';

import { isLikelySpam } from './contactSpam';

test('rejects gibberish submissions with no meaningful words', () => {
  assert.equal(
    isLikelySpam({
      firstName: 'Phzsm',
      lastName: 'Hahavdn',
      companyName: 'Ukvdtqitt LLC',
      email: 'im@e-dialog.group',
      message: 'BUVmrOVeiClZdvSbgXjVCmF',
      altcha: 'payload',
      honeyPot: ''
    }),
    true
  );
});

test('allows normal messages with multiple words', () => {
  assert.equal(
    isLikelySpam({
      firstName: 'John',
      lastName: 'Doe',
      companyName: 'Acme',
      email: 'john@example.com',
      message: 'Hello, I would love to discuss a website project.',
      altcha: 'payload',
      honeyPot: ''
    }),
    false
  );
});
