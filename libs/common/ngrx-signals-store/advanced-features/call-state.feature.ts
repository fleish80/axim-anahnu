import { withSignals } from "../base-features/with-signals";
import { withState } from "../base-features/with-state";
import { selectSignal } from "../select-signal";
import { signalStoreFeature } from "../signal-store-feature";


export type CallState = 'init' | 'loading' | 'loaded' | { error: string };

export function withCallState() {
  return signalStoreFeature(
    withState<{ callState: CallState }>({ callState: 'init' }),
    withSignals(({ callState }) => ({
      loading: selectSignal(() => callState() === 'loading'),
      loaded: selectSignal(() => callState() === 'loaded'),
      error: selectSignal(callState, (callState) =>
        typeof callState === 'object' ? callState.error : null
      ),
    }))
  );
}

export function setLoading(): { callState: CallState } {
  return { callState: 'loading' };
}

export function setLoaded(): { callState: CallState } {
  return { callState: 'loaded' };
}

export function setError(error: string): { callState: CallState } {
  return { callState: { error } };
}
