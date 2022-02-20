import { capitalizeFirstLetter } from '../../utils/helpers';

export default function Nav() {
  const categories = [
    {
      name: 'commercial',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header data-testid='header' className='flex-row px-1'>
      <h2>
        <a href='/'>
          <span role='img' aria-label='camera'>
            {' '}
            📸
          </span>
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a href='#about' onClick={() => categorySelected('about me')}>
              About me
            </a>
          </li>
          <li>
            <span onClick={() => categorySelected('contact')}>Contact</span>
          </li>
          {categories.map((category) => (
            <li className='mx-1' key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}