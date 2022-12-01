import create from 'zustand'

interface StoreState {
    openBar: boolean,
    changebar: () => void
}

const appStore = create<StoreState>()((set) => ({
    openBar: true,
    changebar: () => set((state) => ({openBar: !state.openBar}))
}))

export default appStore;
