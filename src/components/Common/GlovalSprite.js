import SpriteSVG from '../../assets/spriteImg/spriteSheet.svg'

export default function GlovalSprite({ id, color, size = 24 }) {
  return (
    <svg fill={color} width={size} height={size}>
      <use href={`${SpriteSVG}#${id}`} />
    </svg>
  );
}
