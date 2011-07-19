<?php  /*
 print '<pre>';
   var_dump(get_defined_vars()); 
  print '</pre>';
  */
?>
<?php print $variables['vars']['steps'] ?>

<?php foreach ($variables['vars']['links'] as $link): ?>
  <?php print $link ?>
<?php endforeach ?>

