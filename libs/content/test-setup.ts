// @ts-expect-error https://thymikee.github.io/jest-preset-angular/docs/getting-started/test-environment
globalThis.ngJest = {
  testEnvironmentOptions: {
    errorOnUnknownElements: true,
    errorOnUnknownProperties: true,
  },
};
import 'jest-preset-angular/setup-jest';

import { TextDecoder, TextEncoder } from 'util';

// jsdom lacks these; Firebase needs TextDecoder/TextEncoder and `@defer (on viewport)` needs IntersectionObserver.
Object.assign(globalThis, { TextDecoder, TextEncoder });

class IntersectionObserverStub {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
  takeRecords = jest.fn(() => []);
}

Object.assign(globalThis, { IntersectionObserver: IntersectionObserverStub });
