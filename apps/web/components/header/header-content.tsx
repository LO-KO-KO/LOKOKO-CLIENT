import type { CategoryOptionEng, CategoryNameEng } from 'types/category';
import { CategoryMetadata, getOptionLabel } from 'utils/category';
import Link from 'next/link';
import {
  SvgClose,
  SvgDivider,
  SvgHistory,
  SvgLikeFill,
  SvgLogin,
  SvgLogo,
  SvgMy,
  SvgSearch,
} from '@lococo/design-system';
import Input from '@lococo/design-system/components/input/Input';
import { cn } from '@/lib/utils';

interface TopUtilItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface CategoryBarProps {
  categories: CategoryMetadata[];
  selectedCategory: CategoryNameEng | null;
  handleSelectCategory: (key: CategoryNameEng) => void;
  handleOpenSearchBar: () => void;
  isSearching: boolean;
}

interface OptionBarProps {
  options: CategoryOptionEng[];
  selectedCategoryKey: CategoryNameEng;
  selectedOption: CategoryOptionEng | null;
  handleSelectOption: (option: CategoryOptionEng) => void;
}

interface SearchBarProps {
  searchValue: string;
  handleChangeSearchValue: (text: string) => void;
  handleSearchIconClick: () => void;
}

export function TopUtilItem({ icon, label, onClick }: TopUtilItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-[3.2rem] cursor-pointer items-center justify-center gap-[0.8rem] whitespace-nowrap px-[1.6rem] py-[1rem]"
    >
      {icon}
      <p>{label}</p>
    </button>
  );
}

export function TopUtil() {
  return (
    <div className="flex items-center justify-end self-stretch px-[11.9rem] py-[2rem]">
      <TopUtilItem
        icon={<SvgMy className="text-gray-600" />}
        label="マイページ"
        onClick={() => console.log('마이페이지 클릭')}
      />
      <TopUtilItem
        icon={<SvgLikeFill className="text-gray-600" />}
        label="お気に入り"
        onClick={() => console.log('좋아요 클릭')}
      />
      <TopUtilItem
        icon={<SvgHistory className="text-gray-600" />}
        label="最近見た商品"
        onClick={() => console.log('내역 클릭')}
      />
      <TopUtilItem
        icon={<SvgLogin className="text-gray-600" />}
        label="ログイン"
        onClick={() => console.log('로그인 클릭')}
      />
    </div>
  );
}

export function CategoryBar({
  categories,
  selectedCategory,
  handleSelectCategory,
  handleOpenSearchBar,
  isSearching,
}: CategoryBarProps) {
  return (
    <div
      className={cn(
        'flex h-[6.4rem] items-center gap-[2rem] px-[11.9rem]',
        selectedCategory || isSearching
          ? 'border-b border-dashed border-pink-500'
          : 'border-b-[0.1rem] border-gray-500'
      )}
    >
      <SvgLogo className="h-[2.7rem] w-[16rem] shrink-0" />
      <div className="flex h-[6rem] flex-grow items-center">
        {categories.map(({ key, name }) => {
          const isActive = key === selectedCategory;
          return (
            <Link
              href={`/search?middleCategory=${key}&searchType=PRODUCT`}
              key={key}
              className="h-[6rem] w-[13.6rem] shrink-0 cursor-pointer"
              onMouseEnter={() => handleSelectCategory(key)}
              onClick={() => handleSelectCategory(key)}
            >
              <p
                className={cn(
                  'jp-title2 flex h-full items-center gap-[1rem] whitespace-nowrap px-[3.2rem] pb-[1rem] pt-[1rem] font-bold',
                  isActive ? 'text-pink-500' : 'text-gray-800'
                )}
              >
                {name}
              </p>
            </Link>
          );
        })}
      </div>
      <div
        className="flex h-[6.4rem] w-[6.4rem] shrink-0 cursor-pointer items-center justify-center p-[1.4rem]"
        onClick={handleOpenSearchBar}
      >
        {isSearching ? <SvgClose /> : <SvgSearch />}
      </div>
    </div>
  );
}

export function OptionBar({
  options,
  selectedOption,
  selectedCategoryKey,
  handleSelectOption,
}: OptionBarProps) {
  return (
    <div className="flex h-[5.2rem] w-full items-center border-b-[0.1rem] border-pink-500 bg-white px-[9.5rem]">
      {options.map((option, index) => {
        const isActive = option === selectedOption;
        const isLast = index === options.length - 1;
        const label = getOptionLabel(selectedCategoryKey, option);
        return (
          <div
            key={`option-${option}`}
            className="flex h-[3.2rem] items-center justify-center gap-[1rem]"
          >
            <Link
              href={`/search?middleCategory=${selectedCategoryKey}&subCategory=${option}&searchType=PRODUCT`}
              className={cn(
                'jp-body2 cursor-pointer whitespace-nowrap px-[2.4rem] py-[1rem]',
                isActive ? 'font-bold text-pink-500' : 'text-gray-600'
              )}
              onClick={() => handleSelectOption(option)}
            >
              {label}
            </Link>
            {!isLast && <SvgDivider />}
          </div>
        );
      })}
    </div>
  );
}

export function SearchBar({
  searchValue,
  handleChangeSearchValue,
  handleSearchIconClick,
}: SearchBarProps) {
  return (
    <div className="flex w-full items-center gap-[0.8rem] border-b border-pink-500 bg-white px-[11.9rem]">
      <Input
        type="search"
        value={searchValue}
        onChange={(e) => handleChangeSearchValue(e.target.value)}
        placeholder="ラネージュ"
        className="jp-body2 w-full text-right font-bold leading-[3rem] text-gray-800"
      />
      {searchValue.trim() ? (
        <Link
          href={`/search?keyword=${encodeURIComponent(searchValue)}`}
          className="flex h-[6.4rem] w-[6.4rem] shrink-0 cursor-pointer items-center justify-center p-[1.4rem]"
          onClick={handleSearchIconClick}
        >
          <SvgSearch className="cursor-pointer" />
        </Link>
      ) : (
        <div className="flex h-[6.4rem] w-[6.4rem] shrink-0 cursor-pointer items-center justify-center p-[1.4rem]">
          <SvgSearch className="cursor-pointer" />
        </div>
      )}
    </div>
  );
}
