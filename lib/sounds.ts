import { useSound } from 'use-sound';
import { usePersistantState } from '.';

export function useClick() {
	const state = usePersistantState();
	const result = useSound('/sounds/button-41.ogg', {
		volume: 0.2,
	});

	if (!state.get().sound) return [() => {}, null];

	return result;
}
