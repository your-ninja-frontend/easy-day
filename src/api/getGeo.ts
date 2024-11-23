export default function getGeo() {
  if (!navigator.geolocation) {
    console.log('Geolocation API не поддерживается.');
  } else {
    return new Promise<GeolocationCoordinates>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const geo = position.coords;
          resolve(geo);
        },
        (error) => {
          console.log(`Error: ${error}`);
          reject(error);
        }
      );
    });
  }
}
