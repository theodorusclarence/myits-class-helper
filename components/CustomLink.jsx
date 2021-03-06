import UnstyledLink from './UnstyledLink';

export default function CustomLink(props) {
  return (
    <UnstyledLink
      className={`${props.className} text-gray-800  inline-flex items-center px-4 py-2 rounded-md bg-primary-400  font-bold hover:bg-primary-500`}
      {...props}
    >
      {props.children}
    </UnstyledLink>
  );
}
