import { useCallback, useState } from 'react';

interface IlistItem{
    title: string;
    isSelected: boolean;
}

export const Dashboard = () => {
    const [lista, setLista] = useState<IlistItem[]>([]);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if(e.key === 'Enter'){
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setLista((oldLista) => {

                if(oldLista.some((listItem) => listItem.title === value)) return oldLista;

                return[...oldLista, 
                
                    {
                        title: value,
                        isSelected: false,
                    }
                ];
            });
        }

    }, [lista]);

    return (
        <div>
            <p>Lista</p>
            <input 
                onKeyDown={handleInputKeyDown}
            />
            <p>{lista.filter((listItem) => listItem.isSelected).length}</p>
            <ul>
                {lista.map((listItem) => {
                    return <li key={listItem.title}>
                        <input type="checkbox" checked={listItem.isSelected} onChange={() => {
                            setLista(oldLista =>{
                                return oldLista.map(oldlistItem => {
                                    const newIsSelected = oldlistItem.title === listItem.title? !oldlistItem.isSelected: oldlistItem.isSelected;
                                    return{
                                        ...oldlistItem,
                                        isSelected: newIsSelected,
                                    };
                                });
                            });
                        }}/>
                        {listItem.title}
                        </li>;
                })}
            </ul>

        </div>
    );
}