import { YMaps, Map, Placemark } from "react-yandex-maps";

const ContactMap = () => (
        <YMaps>
            <div>
                <Map width="100%" defaultState={{ center: [41.249722, 69.183615], zoom: 16 }}>
                    <Placemark
                        geometry={[41.249722, 69.183615]}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: '/placemark.svg',
                            iconImageSize: [30, 50],
                            iconImageOffset: [-16, -50],
                        }}
                    >
                    </Placemark>
                </Map>
            </div>
        </YMaps>
);

export default ContactMap