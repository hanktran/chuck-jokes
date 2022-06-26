## Gather Informations
* Examine the API and its documentation.
  * Does not correspond to the app description
    1. A joke does not have some information.(like, dislike,...)
* Analysis of the design.
  * Not clear due to a lack of requirements

## Build project
### Establish project structure
  1. Typescript
  1. CSS
  1. Axios
  1. Fontawesome

### Landing Page
  * When arrive at the landing page, get all of the jokes. (choose)
    * Pros
      1. Create categories on FE side
      1. Filter by category on FE side
    * Cons
      1. The response has been overwhelming.
  * When arrive at the landing page, get all categories, then get jokes from the first category in all categories. (not choose)
    * Pros
      1. By get jokes of single category the response data is small
    * Cons
      1. Call two APIs for the first time.
      1. Filter by category call API

### Details Page
  * Get joke from all jokes based on the joke's id. (call on Landing Page) (not choose)
    * Pros
      1. There is no need to use API.
      1. Can implemnt next.joke and prev.joke
    * Cons
      1. Need to handle this situation: Enter the url into browser to access the details page without going to the landing page first.
### Details Page
  * Get the joke with the api (choose)
    * Pros
      1. Can enter the url into browser to access the details page
    * Cons
      1. Can't implemnt next.joke and prev.joke (next and prev id not included in API) (current use random API for next and prev)

# Need TODO
 * Replace css with scss
 * Refactor codebase, remove unused code
 * Make the layout look like the design file. (spaces, image, ....)
 * Fix bugs UI, UX
 * 
