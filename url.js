export const objectify = ( obj, [ k, v ] ) => ( obj[ k ] = v, obj );

export function getParams (locationSearch) {
  return [
    ...new Map(new URLSearchParams(locationSearch))
  ].reduce(objectify, {});
}
