import { Category } from '@/models/category'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type CategoriesComponentProps = {
   handleCategoryChange: (categoryName: string) => void
   categories: Category[]
}

function CategoriesComponent({ handleCategoryChange, categories }: CategoriesComponentProps) {
   return (
      <Box component={'section'} id='categories' className='py-6'>
         <Box className='flex flex-wrap items-center justify-center gap-2'>
            <Button variant='contained' onClick={() => handleCategoryChange('')}>
               All Course
            </Button>
            {categories?.map(category => (
               <Button
                  key={category.id}
                  variant='contained'
                  onClick={() => handleCategoryChange(category.name)}
               >
                  {category.name}
               </Button>
            ))}
         </Box>
      </Box>
   )
}

export default CategoriesComponent
