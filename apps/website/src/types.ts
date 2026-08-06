//----------------------
// Types
//----------------------

export type CompoundComponent<TProps, TComponents> = React.FC<TProps> & TComponents;

export type TSlot = { asChild?: boolean };
