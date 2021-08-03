import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

configure({ adapter: new Adapter() });

describe('Prueba con componente <DashboardRoutes/>', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Isaias'
    }
  }

  test('Verificar el nombre del usuario registrado', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Isaias');
  })

})

