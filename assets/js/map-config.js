const init = () => {
    const point = [48.872185073737896, 2.354223999999991];

    const myMap = new ymaps.Map("map", {
        center: point,
        zoom: 10,
        controls: [],
    }, 
    {
        suppressMapOpenBlock: true
    });

    const myPoint = new ymaps.Placemark(point, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/point.svg',
        iconImageSize: [48, 48]
    });
    
    myMap.geoObjects.add(myPoint); 
};

ymaps.ready(init);