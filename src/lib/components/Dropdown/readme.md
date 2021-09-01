# Dropdown

### Usage

##### Importing

`import { Dropdown, useDropdown } from '@inva-ui/react'`

##### Using useDropdown

`const { selected, onSelect } = useDropdown();`

##### Using in React

```
      <Dropdown
        onSelect={onSelect}
        dropdownData={[
          {
            identifer: "1",
            primary: "Option 1",
            secondary: ["Option1 Child"],
            thumbnailSrc:
              "https://res.cloudinary.com/shaun-storage/image/upload/v1626776083/wischer_logo_stroke_igno78.png",
          },
          {
            identifer: "2",
            primary: "Option 2",
            secondary: ["Option2 Child"],
            thumbnailSrc:
              "https://res.cloudinary.com/shaun-storage/image/upload/v1627135239/160x160_JumpStart_Logo_without_Word_Gradient_logo_uuy3ae.svg",
          },
          {
            identifer: "3",
            primary: "Option 3",
            secondary: ["Option3 Child"],
            thumbnailSrc:
              "https://res.cloudinary.com/shaun-storage/image/upload/v1627135239/160x160_JumpStart_Logo_without_Word_Gradient_logo_uuy3ae.svg",
          },
          {
            identifer: "4",
            primary: "Option 4",
            secondary: ["Option4 Child"],
            thumbnailSrc:
              "https://res.cloudinary.com/shaun-storage/image/upload/v1627135239/160x160_JumpStart_Logo_without_Word_Gradient_logo_uuy3ae.svg",
          },
          {
            identifer: "5",
            primary: "Option 5",
            secondary: ["Option5 Child"],
            thumbnailSrc:
              "https://res.cloudinary.com/shaun-storage/image/upload/v1627135239/160x160_JumpStart_Logo_without_Word_Gradient_logo_uuy3ae.svg",
          },
        ]}
        leadingIcon={SearchIcon}
      />
    </div>
```
