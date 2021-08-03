import '@testing-library/jest-dom/extend-expect';
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {

  test('Debe retornar el estado inicial del reducer', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false })
  })

  test('Debe autenticar y mostrar el nombre del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Alejandro'
      }
    }
    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'Alejandro' })
  })

  test('Debe borrar el nombre del usuario al cerrar sesión', () => {
    const action = {
      type: types.logout
    }
    const state = authReducer({ logged: true, name: 'Alejandro' }, action);
    expect(state).toEqual({ logged: false })
  })

})
