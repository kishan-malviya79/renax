import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


function menubar() {
return (
  <div className="  h-screen">
  <Menubar >
<MenubarMenu>
  <MenubarTrigger>Home</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>
      Slider 
    </MenubarItem>
    <MenubarItem>Image</MenubarItem>
    <MenubarItem>Video</MenubarItem>
    <MenubarItem>Slidershow</MenubarItem>
    <MenubarItem>
      Openpage <MenubarShortcut> 1</MenubarShortcut>
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>
<MenubarMenu>
  <MenubarTrigger>Cars</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>Car Grid</MenubarItem>
    <MenubarItem>Car Listing</MenubarItem>
    <MenubarItem>Car Types 01</MenubarItem>
    <MenubarItem>Car Types 02</MenubarItem>
    <MenubarItem>Car Details 01</MenubarItem>
    <MenubarItem>Car Details 02</MenubarItem>
  </MenubarContent>
</MenubarMenu>
<MenubarMenu>
  <MenubarTrigger>Pages</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>
      Team  
    </MenubarItem>
    <MenubarItem> Image Gallery</MenubarItem>
    <MenubarItem> Video Gallery</MenubarItem>
    <MenubarItem>Pricing Plang</MenubarItem>
    <MenubarItem>FAQ</MenubarItem>
    <MenubarItem>Testiominals</MenubarItem>
    <MenubarItem>Team Single</MenubarItem>
    <MenubarItem>404 error</MenubarItem>
  </MenubarContent>
</MenubarMenu>
<MenubarMenu>
  <MenubarTrigger>Blog</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>
      Blog Grid
    </MenubarItem>
    <MenubarItem>  Blog List</MenubarItem>
    <MenubarItem>Post Single</MenubarItem>
    
  </MenubarContent>
</MenubarMenu>
</Menubar>
</div>
)
}

export default menubar