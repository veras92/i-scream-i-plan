export const themeLight = {
  // Styles for components that do not change color between Light/Dark themes
  componentPrimary: '#FFFFFF', // Main white to be used when components do not change color in themes
  componentAccent: '#3E85F3', // Main blue to be used when components do not change color in themes

  //Homepage specific styles
  bcgHomepage: '#DCEBF7', // Homepage background light blue
  homepageTitle: '#171820', // Homepage titles //! can use regular "text" color "#111111" for <p> on homepage
  //homepageArrows: '#000000', //! can use regular "text" color "#111111" instead
  //reviewsTitle: '#343434', //! Homepage reviews title - use homepageTitle instead
  reviewsText: 'rgba(17, 17, 17, 0.7)', // Homepage reviews text
  reviewsStars: '#FFAC33', // Yellow color for stars in reviews
  reviewsMissingStars: '##CEC9C1', // Grey color for stars in reviews

  bcgPrimary: '#FFFFFF', // Main white background - changes to black in DT (Sidebar)
  bcgSecondary: '#F7F6F9', // Light greay background (User profile as an example)
  bcgTernary: '#FFFFFF', //  white background that is light black in DT (User profile as an example)
  bcgFocus: '#E3F3FF', // Sidebar active tab background,  Add task background, Calendar acactive "Day/Month" tab - changes to accent blue in DT
  bcgFocusSecondary: '#E3F3FF', // Calendar incactive "Day/Month" tab. Light blue that changes to light dark in DT

  disabled: 'rgba(220, 227, 229, 0.8)', // for all inactive items (inputs or arrows) + Weekend dates color. Remains the same in both themes

  text: '#111111', // Main text black color - changes to white in dark theme (+sidebar inactive tab text)
  textSecondary: '#616161', //grey subheaders text - remains greay in dark theme.  Sidebar "User panel" text
  activeText: '#3E85F3', // Sidebar active tab text and icon, + calendar active "Day/Month" -  blue that changes to white in DT

  priorityLowText: '#3E85F3',
  priorityMediumText: '#F3B249',
  priorityHighText: '#EA3D65',
  bcgPriorityLow: '#CEEEFD',
  bcgpPriorityMedium: '#FCF0D4',
  bcgPriorityHigh: '#FFD2DD',
};

export const themeDark = {
  // Styles for components that do not change color between Light/Dark themes
  componentPrimary: '#FFFFFF', // Main white to be used when components do not change color in themes
  componentAccent: '#3E85F3', // Main blue to be used when components do not change color in themes

  //Homepage specific styles
  bcgHomepage: '#DCEBF7', // Homepage background light blue
  homepageTitle: '#171820', // Homepage titles //! can use regular "text" color "#111111" for <p> on homepage
  //homepageArrows: '#000000', //! can use regular "text" color "#111111" instead
  //reviewsTitle: '#343434', //! Homepage reviews title - use homepageTitle instead
  reviewsText: 'rgba(17, 17, 17, 0.7)', // Homepage reviews text
  reviewsStars: '#FFAC33', // Yellow color for stars in reviews
  reviewsMissingStars: '##CEC9C1', // Grey color for stars in reviews

  bcgPrimary: '#13151A', // Main black, changes to white in DT (Sidebar)
  bcgSecondary: '#171820', // semi-dark background (User profile as an example)
  bcgTernary: '#21222C', // Light black background that is white in LT (User profile as an example)
  bcgFocus: '#3E85F3', // Sidebar active tab background,  Add task background, Calendar active "Day/Month" tab background - changes to transparent blue in LT
  bcgFocusSecondary: 'rgba(255, 255, 255, 0.15)', // Calendar incactive "Day/Month" tab. Light dark that changes to light blue in DT

  disabled: 'rgba(220, 227, 229, 0.8)', // for all inactive items (inputs or arrows) + Weekend dates color. Remains the same in both themes

  text: '#FFFFFF', // Main text white color,  changes to black in white theme
  textSecondary: 'rgba(250, 250, 250, 0.3)', // grey subheaders text - remains greay in dark theme. Sidebar "User panel" text
  activeText: '#FFFFFF', // Sidebar active tab text and icon, + calendar active "Day/Month" -  white that changes to blue in LT

  priorityLowText: '#3E85F3',
  priorityMediumText: '#F3B249',
  priorityHighText: '#EA3D65',
  bcgPriorityLow: '#CEEEFD',
  bcgpPriorityMedium: '#FCF0D4',
  bcgPriorityHigh: '#FFD2DD',
};
