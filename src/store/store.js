const { create } = require("zustand");

export const useStorelista = create((set) => ({
  count: 1,
  lista: [],
  item: {},
  additem: (item) =>
    set((state) => ({
      lista: [...state.lista, item],
    })),
  incremen: (title) =>
    set((state) => {
      const index = state.lista.findIndex((val) => val.title === title);
      console.log(index);

      if (index === -1) {
        console.log("no encontrado");
      } else {
        const newItem = [...state.lista];
        console.log(newItem, "aqww");
        console.log(state)
        newItem[index] = {
          ...newItem[index],
          cantidad: newItem[index].cantidad + 1,
        };
        return { ...state.lista, lista: newItem };
      }
    }),
}));
