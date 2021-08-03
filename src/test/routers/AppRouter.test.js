import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

configure({ adapter: new Adapter() });

describe('Pruebas en <AppRouter/>', () => {

  test('Debe mostrar login si el usuario NO está autenticado', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: false
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar el componente de marvel si el usuario está autenticado', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'Thiago'
      }
    }
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBe(true);
  })
})
