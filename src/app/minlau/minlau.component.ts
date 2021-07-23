import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatTableDataSource } from '@angular/material/table';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-minlau',
  templateUrl: './minlau.component.html',
  styleUrls: ['./minlau.component.scss']
})
export class MinlauComponent implements OnInit {
  displayedColumnsCommands: string[] = ['Command', 'Description'];
	public dataSourceCommands = new MatTableDataSource<any>();
  public dataCommands = [
		{ command: "--list-games", description: "List games in config.ini" },
		{ command: "--help", description: "Display help message" },
		{ command: "--create-prefix [game]", description: "Create a prefix if there isn't already one" },
		{ command: "--delete-prefix [game]", description: "Delete a prefix" },
		{ command: "--launch [game]", description: "Launch game" },
		{ command: "--install-dxvk [game]", description: "Install dxvk on prefix" },
		{ command: "--uninstall-dxvk [game]", description: "Uninstall dxvk on prefix" },
		{ command: "--winecfg [game]", description: "Open winecfg on prefix" },
		{ command: "--winetricks [game]", description: "Open winetricks on prefix" },
		{ command: "--download-wine [version]", description: "Download wine build and install it" },
		{ command: "--download-dxvk [version]", description: "Download dxvk build and install it" },
		{ command: "--clear-cache", description: "Delete everything in the cache directory" },
	];

  displayedColumnsIni: string[] = ['Variable', 'Description'];
	public dataSourceIni = new MatTableDataSource<any>();
	public dataIni = [
		{ var: "[global]", description: "Global settings, will be overwriten by the game var" },
		{ var: "[GAME]", description: "Game specific settings, overwrites global settings" },
		{ var: "LAUNCH", description: "Path to game executable" },
		{ var: "WINE", description: "Path to wine binary" },
		{ var: "WINEPREFIX", description: "Path to wine prefix" },
		{ var: "WINEARCH", description: "Wine architecture [win32/win64], defaults to win64" },
		{ var: "WINEESYNC", description: "Whether or not to use esync [0/1]" },
		{ var: "WINEFSYNC", description: "Whether or not to use fsync [0/1]" },
		{ var: "GAMEMODE", description: "Whether or not to use feral gamemode [0/1]" },
		{ var: "WINE_INSTALL", description: "Path to install wine builds" },
		{ var: "DXVK_INSTALL", description: "Path to install dxvk builds" },
		{ var: "DXVK_PATH", description: "Path to dxvk installation" },
		{ var: "DXVK_DLLS", description: "Which dxvk dlls to install" },
		{ var: "AUTO_DXVK", description: "Whether or not to auto (un)install dxvk on prefix [0/1]" },
		{ var: "DXVK", description: "When AUTO_DXVK=1 it will install or uninstall dxvk [0/1]" },
		{ var: "ARGS", description: "Argument to go after command" },
		{ var: "SANDBOX", description: "Disable wine desktop integration [0/1]" },
		{ var: "WINETRICKS_SANDBOX", description: "Disable wine desktop integration using winetricks [0/1]" },
		{ var: "MINLAU_CACHE", description: "Path to store temporary files" },
		{ var: "WORKING_DIR", description: "Directory to cd when opening the game" },
		{ var: "DISABLE_SCREEN_SAVER", description: "Disable X screen saver" },
	];

  constructor() { }

  ngOnInit(): void {
		this.dataSourceCommands.data = this.dataCommands;
		this.dataSourceIni.data = this.dataIni;
  }

}
