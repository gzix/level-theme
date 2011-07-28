<?php 
/**
 * LinkedIn #block-level_platform-people_known
 *
 * LinkedIn API: https://developer.linkedin.com/documents/profile-fields
 * 'distance' values are:
 *    0: the member
 *    1, 2, and 3: # of degrees apart
 *    -1: out of network
 *    100: share a group, but not within 3 degrees (will get 1-3 instead)
 *
 * There's also https://developer.linkedin.com/documents/people-search-api
 * 'network' There are four values
 *    F: First degree connections
 *    S: Second degree connections
 *    A: Inside one of your groups
 *    O: Out-of-network connections
 */
?>
<?php 

  $known_items = array('first-name','last-name','distance','picture-url','public-profile-url');
  
  // Define relationship texts
  $distance = $contact['distance'];
  $relation = '';
  if ($distance === '1') {
    $relation = ' directly on LinkedIn.';
  }
  if ($distance === '2' || $distance === '3') {
    $relation = ' through someone else.';
  }
  if ($distance === '100') {
    $relation = ' through a LinkedIn group.';
  }

?>

<a href="<?php print $contact['public-profile-url'] ?>" <?php print drupal_attributes($contact['#attributes'])?>>

<span class="name-img clearfix">
  <?php
    if (isset($contact['picture-url'])) {
      print '<img src="'.$contact['picture-url'].'">';
    }
    else {
      print '<span class="img-placeholder"></span>';
    }
  ?>
  <sapn class="name"><?php print $contact['first-name']; print ' ';  print $contact['last-name']; ?></span>
</span>

<span class="relationship">You know <?php print $contact['first-name'] . $relation; ?></span>

<?php //var_dump($contact); ?>

</a>