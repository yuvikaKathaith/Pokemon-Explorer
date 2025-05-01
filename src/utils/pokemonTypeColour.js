export const getTypeColour = (type) => {
    switch (type) {
      case 'fire':
        return 'bg-orange-700';
      case 'grass':
        return 'bg-green-700';
      case 'water':
        return 'bg-blue-700';
      case 'bug':
        return 'bg-lime-700';
      case 'normal':
        return 'bg-gray-700';
      case 'poison':
        return 'bg-purple-700';
      case 'electric':
        return 'bg-yellow-700';
      case 'ground':
        return 'bg-yellow-700';
      case 'fairy':
        return 'bg-pink-700';
      case 'fighting':
        return 'bg-red-700';
      case 'psychic':
        return 'bg-pink-700';
      case 'rock':
        return 'bg-yellow-700';
      case 'ghost':
        return 'bg-indigo-700';
      case 'ice':
        return 'bg-cyan-700';
      case 'dragon':
        return 'bg-indigo-700';
      case 'dark':
        return 'bg-gray-700';
      case 'steel':
        return 'bg-gray-700';
      case 'flying':
        return 'bg-sky-700';
      default:
        return 'bg-gray-700';
    }
};