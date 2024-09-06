import { Button } from '@/components/ui/button'
import { Category } from '@/models/category'

type CategoriesComponentProps = {
   handleCategoryChange: (categoryName: string) => void
   categories: Category[]
}

function CategoriesComponent({ handleCategoryChange, categories }: CategoriesComponentProps) {
   return (
      <div className='py-4 border shadow'>
         <div className='flex flex-wrap items-center justify-center gap-2'>
            <Button size={'sm'} onClick={() => handleCategoryChange('')}>
               All Course
            </Button>
            {categories?.map(category => (
               <Button
                  key={category.id}
                  size={'sm'}
                  onClick={() => handleCategoryChange(category.name)}
               >
                  {category.name}
               </Button>
            ))}
         </div>
      </div>
   )
}

export default CategoriesComponent
