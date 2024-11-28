export default function getGeo() {
  if (!navigator.geolocation) {
    console.log('Geolocation API не поддерживается.');
  } else {
    return new Promise<GeolocationCoordinates | undefined>((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const geo = position.coords;
          resolve(geo);
        },
        () => {
          resolve(undefined);
        }
      );
    });
  }
}
