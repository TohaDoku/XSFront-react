import React, { Component } from 'react';
import ResponsiveAppBar from '../../components/ResponsiveAppBar/ResponsiveAppBar';
import LabelBottomNavigation from '../../components/LabelBottomNavigation/LabelBottomNavigation';


export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    // Проверяем ширину экрана при монтировании компонента
    this.handleResize();
    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // Убираем слушатель события при размонтировании компонента
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    // Обновляем состояние isMobile в зависимости от ширины экрана
    this.setState({ isMobile: window.innerWidth < 600 });
  };

  render() {
    const { isMobile } = this.state;
  
    return (
      <>
        {isMobile ? (
          <>
            <ResponsiveAppBar />
            <LabelBottomNavigation />
          </>
        ) : (
          <ResponsiveAppBar />
        )}
      </>
    );
  }
}

export default Main;
