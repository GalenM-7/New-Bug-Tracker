import { personalityDisorders } from '../shared/allDisorders';
import { narcassisticCharacters } from '../shared/narcassismCharacters';
import { depressedCharacters } from '../shared/depressionCharacters';
import { schizoidCharacters } from '../shared/schizoidCharacters';
import { psychopathicCharacters } from '../shared/psychopathicCharacters';
import { sociopathicCharacters } from '../shared/sociopathicCharacters';
import { ptsdCharacters } from '../shared/ptsdCharacters';

export const initialState = {
    disorders: personalityDisorders,
    narcassism: narcassisticCharacters,
    depression: depressedCharacters,
    schizoid: schizoidCharacters,
    psychopathy: psychopathicCharacters,
    sociopathy: sociopathicCharacters,
    ptsd: ptsdCharacters,
};

export const Reducer = (state = initialState, action) =>{
    return state;
};