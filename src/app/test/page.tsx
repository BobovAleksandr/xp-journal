'use client'

import icon from '@/shared/assets/gear.svg'
import MenuItem from '@/shared/components/MenuItem/MenuItem';
import MenuContainer from "@/shared/components/MenuContainer/MenuContainer";
import ProfileButton from '@/features/Auth/ui/ProfileButton/ProfileButton';

const TestPage = () => {
  return (
    <>
      <ProfileButton name='Васян' onClick={() => {}} />
      <ProfileButton name='Васян' userImage={'/images/Image-error-placeholder.jpg'} onClick={() => {}} />

      <MenuContainer>
        <li><MenuItem as="button" icon={icon} onClick={() =>{console.log('LOX');}}>Кнопка</MenuItem></li>
        <li><MenuItem as="button" icon={icon} onClick={() =>{console.log('LOX');}}>Кнопка</MenuItem></li>
        <li><MenuItem as="button" icon={icon} onClick={() =>{console.log('LOX');}}>Кнопка</MenuItem></li>
        <li><MenuItem as="button" icon={icon} onClick={() =>{console.log('LOX');}}>Кнопка</MenuItem></li>
        <li><MenuItem as="link" icon={icon} href="/">Кнопкаdasdasdasdasdas</MenuItem></li>
      </MenuContainer>
    </>
  );
};

export default TestPage;