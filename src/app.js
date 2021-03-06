// Сброс стилей для одинакового отображения во всех браузерах
import 'reset-css/sass/_reset.scss';

// Подключение стилей слайдера
import 'slick-slider/slick/slick.scss'
import 'slick-slider/slick/slick-theme.css'

// Подключение уникальных стилей
import './main.scss';

import * as $ from 'jquery';
window.jQuery = $;
window.$ = $;

// Подключение слайдера
import 'slick-slider/slick/slick.min'

// Настройки слайдеров
import './page/index/elemental/elemental'
import './page/index/district/district'


// Подключение скриптов
import './components/form/form'
import './page/index/map/map'
import './blocks/header/header'
