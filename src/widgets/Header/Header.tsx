import SearchInput from '@/shared/components/SearchInput/SearchInput';
import styles from './Header.module.scss';
import cn from 'classnames';
import Logo from '@/shared/components/Logo/Logo';

type HeaderProps = {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn(styles.header, className)}>
      <Logo />
      <div className={styles.filters}>
        <div>filter</div>
        <SearchInput name='search' placeholder='Поиск'/>
      </div>
    </header>
  );
};

export default Header;