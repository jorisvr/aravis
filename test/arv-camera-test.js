#!/usr/bin/env gjs

/* Aravis - Digital camera library
 *
 * Copyright © 2009-2010 Emmanuel Pacaud
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General
 * Public License along with this library; if not, write to the
 * Free Software Foundation, Inc., 59 Temple Place, Suite 330,
 * Boston, MA 02111-1307, USA.
 *
 * Author: Emmanuel Pacaud <emmanuel@gnome.org>
 */

const GLib = imports.gi.GLib;
const Aravis = imports.gi.Aravis;

let camera = Aravis.Camera.new ("Fake_1");

camera.set_region (0,0,128,128);
camera.set_pixel_format (Aravis.PixelFormat.MONO_8);

let [x,y,width,height] = camera.get_region ();

let stream = camera.create_stream (null, null);

for (var i = 0; i < 10; i++)
	stream.push_buffer (Aravis.Buffer.new (128*128, null));

camera.start_acquisition ();
GLib.usleep (1000000);
camera.stop_acquisition ();