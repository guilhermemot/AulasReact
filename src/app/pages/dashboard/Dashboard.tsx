import { useCallback, useEffect, useState } from 'react';
import { ITarefa, TarefasService } from '../../shared/services/api/tarefas/TarefasService';
import { ApiException } from '../../shared/services/api/ApiException';


export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
        .then((result) =>{
            if(result instanceof ApiException){
                alert(result.message);
            }else{
                setLista(result);
            }
        });
    }, []);

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
                        isCompleted: false,
                        id: oldLista.length,
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
            <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>
            <ul>
                {lista.map((listItem) => {
                    return <li key={listItem.id}>
                        <input type="checkbox" checked={listItem.isCompleted} onChange={() => {
                            setLista(oldLista =>{
                                return oldLista.map(oldlistItem => {
                                    const newIsCompleted = oldlistItem.title === listItem.title? !oldlistItem.isCompleted: oldlistItem.isCompleted;
                                    return{
                                        ...oldlistItem,
                                        isCompleted: newIsCompleted,
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