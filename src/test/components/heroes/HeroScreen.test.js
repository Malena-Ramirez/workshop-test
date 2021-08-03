import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';

configure({ adapter: new Adapter() });

describe('Pruebas del componente <HeroScreen />', () => {

  const historyMock = {
    push: jest.fn(),
    goBack: jest.fn(),
    length: 10
  }

  const wrapper = mount(
    <MemoryRouter initialEntries={['/Hero']}>
      <HeroScreen history={historyMock} />
    </MemoryRouter>
  )


  test('El componente debe funcionar correctamente', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/Hero/marvel-hulk']}>
        <Route path='/hero/:heroeId' component={HeroScreen} />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').text().trim()).toBe('Hulk')
  })

  test('Debe mostrar el redirect si no tenemos la url del heroe', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true)
  })

  test('Debe hacer push', () => {
    const historyMock = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 1
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/Hero/marvel-hulk']}>
        <Route path='/hero/:heroeId' component={() => <HeroScreen history={historyMock} />} />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).not.toHaveBeenCalled()
  })

  test('Debe regresar a la pantalla anterior', () => {
    const historyMock = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 10
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/Hero/marvel-hulk']}>
        <Route
          path='/hero/:heroeId'
          component={() => <HeroScreen history={historyMock} />} />
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')();
    expect(historyMock.push).toHaveBeenCalledTimes(0);
    expect(historyMock.goBack).toHaveBeenCalled();

  })
})
