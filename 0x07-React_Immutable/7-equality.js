import { Map, is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  return (is(Map(map1), Map(map2)));
}
